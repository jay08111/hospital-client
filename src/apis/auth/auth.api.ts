import { Caller } from "@/apis/caller";
import { LoginUserDto } from "@/apis/auth/dtos";
import { POST_LOGIN } from "@/apis/url";

export const PostLogin = async (userInfo: LoginUserDto) => {
  return await Caller.POST_RAW<any>(POST_LOGIN, userInfo);
};
