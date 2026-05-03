import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const insert_product = async (data: any) => {
    return await prisma.products.create({
        data
    });
};

export const get_products = async () => {
  return await prisma.products.findMany();
};

export const get_product_id = async (id: string) => {
  return await prisma.products.findUnique({
    where: { id }
  });
};

export const update_product = async (id: string, data: any) => {
  return await prisma.products.update({
    where: { id },
    data
  });
};

export const delete_product = async (id: string) => {
  return await prisma.products.delete({
    where: { id }
  });
};