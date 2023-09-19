import { posts } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<posts, "id">

async function getPosts() {
  const result = await prisma[TABLE_NAME].findMany();

  return result;
}

async function getPost(id: number) {
  const result = await prisma[TABLE_NAME].findFirst({where:{id}});
  return result;
}

async function createPost(post: CreatePost) {
  const result = await prisma[TABLE_NAME].create({
    data: post
  })
  return result;
}

async function deletePost(id: number) {
  const result = await prisma[TABLE_NAME].delete({where:{id}});
  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;