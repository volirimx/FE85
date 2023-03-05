import { GetPostsResponse } from "../api/post/post";

export const preparePostsResponse = (
  postsResponseData: GetPostsResponse
): GetPostsResponse => {
  return {
    ...postsResponseData,
    next: postsResponseData.next
      ? postsResponseData.next.replace("http", "https")
      : null,
    previous: postsResponseData.previous
      ? postsResponseData.previous.replace("http", "https")
      : null,
  };
};
