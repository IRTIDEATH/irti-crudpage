import { prisma } from "./prisma";

// hanya akan menampilkan 5 items per halaman
const ITEMS_PER_PAGE = 5

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  try {
    const contacts = await prisma.contact.findMany({
      skip: offset,
      // take ini sama seperti limit pada arrow query
      take: ITEMS_PER_PAGE,
      where: {
        // metode or ini artinya mencari berdasarkan name atau phone
        OR: [
          {
            name: {
              contains: query,
              // mode ini artinya tidak memperdulikan dia 
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};


export const getContactPages = async (query: string) => {
  try {
    // untuk menghitung jumlah record berdasarkan pencarian gunakan count
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    // convert total row yang didapat dari query ini menjadi number
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE)
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};