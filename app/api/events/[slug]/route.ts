import Event from "@/database/event.model";
import connectDB from "@/lib/monodb";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET handler for fetching a single event by slug
 * @param req - Next.js request object
 * @param params - Route parameters containing the slug
 * @returns JSON response with event data or error message
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Await params to access the slug (Next.js 15+ requirement)
    const { slug } = await params;

    // Validate slug parameter
    if (!slug) {
      return NextResponse.json(
        {
          message: "Slug parameter is required",
        },
        { status: 400 }
      );
    }

    // Validate slug format (alphanumeric, hyphens, and underscores only)
    const slugPattern = /^[a-z0-9-_]+$/;
    if (!slugPattern.test(slug)) {
      return NextResponse.json(
        {
          message: "Invalid slug format. Only lowercase letters, numbers, hyphens, and underscores are allowed",
        },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Query event by slug
    const event = await Event.findOne({ slug }).lean();

    // Handle event not found
    if (!event) {
      return NextResponse.json(
        {
          message: `Event with slug '${slug}' not found`,
        },
        { status: 404 }
      );
    }

    // Return successful response with event data
    return NextResponse.json(
      {
        message: "Event fetched successfully",
        event,
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error("Error fetching event by slug:", error);

    // Handle specific Mongoose errors
    if (error instanceof Error) {
      // Handle database connection errors
      if (error.name === "MongooseError" || error.name === "MongoError") {
        return NextResponse.json(
          {
            message: "Database connection error",
            error: "Unable to connect to the database",
          },
          { status: 503 }
        );
      }

      // Return generic error response
      return NextResponse.json(
        {
          message: "Failed to fetch event",
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Handle unexpected non-Error objects
    return NextResponse.json(
      {
        message: "An unexpected error occurred",
        error: "Unknown error",
      },
      { status: 500 }
    );
  }
}
