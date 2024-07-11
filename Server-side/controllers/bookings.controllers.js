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

export const getSpecificBooking = async (req, res) => {
  const user = req.user;
  const userId = user.id;
  try {
    const getBookings = await prisma.Bookings.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        dateTime: true,
        location: true,
        number: true,
        userId: true,
      },
    });
    res.status(200).json({ success: true, data: getBookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const allBookings = await prisma.Bookings.findMany();
    res.status(200).json({ success: true, message: allBookings });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message /*"An error occured"*/ });
  }
};

export const updateBooking = async (req, res) => {
  const id = req.params.id;
  const { dateTime, location, number } = req.body;
  try {
    const updatedBooking = await prisma.Bookings.update({
      where: { id: id },
      data: {
        dateTime,
        location,
        number,
      },
    });
    res.status(200).json({ success: true, message: updatedBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBooking = await prisma.Bookings.delete({
      where: { id: id },
    });
    res.status(200).json({ success: true, message: deletedBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
