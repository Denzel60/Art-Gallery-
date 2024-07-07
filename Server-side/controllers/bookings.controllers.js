import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createBooking = async (req, res) => {
  const user = req.user;
  const { dateTime, location, number } = req.body;
  const userId = user.id;
  try {
    const newBooking = await prisma.Bookings.create({
      data: {
        dateTime: dateTime,
        location: location,
        number: number,
        userId: userId,
      },
    });
    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
