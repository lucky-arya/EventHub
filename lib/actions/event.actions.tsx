'use server'

import connectDB from "@/lib/monodb"
import Event from "@/database/event.model"


export const getAllEvents = async () => {
    try {
        await connectDB()
        
        const events = await Event.find().sort({ createdAt: -1 }).lean()
        
        return JSON.parse(JSON.stringify(events))
    } catch (error) {
        console.error("Error fetching events:", error)
        return []
    }
}


export const getSimilareventsBySlug = async (slug : string) => {
    try {
        await connectDB()

        const event = await Event.findOne({ slug })
        
        return  await Event.find({
            _id: { $ne: event?._id },
            tags: { $in: event?.tags }
        }).lean()

    } catch (error) {
        return []
    }
}