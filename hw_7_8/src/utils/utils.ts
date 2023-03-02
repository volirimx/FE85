import { GetPostResponce } from "../api/post/post";

export const preparePostsResponce = (postResponseData: GetPostResponce): GetPostResponce => {
  return {
    ...postResponseData,
    next: postResponseData.next ? postResponseData.next.replace("http", "https") : null,
    previous: postResponseData.previous ? postResponseData.previous.replace("http", "https") : null
  }
}