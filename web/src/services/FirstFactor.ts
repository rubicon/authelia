import { FirstFactorPath } from "./Api";
import { PostWithOptionalResponse } from "./Client";
import { SignInResponse } from "./SignIn";

interface PostFirstFactorBody {
    username: string;
    password: string;
    keepMeLoggedIn: boolean;
    targetURL?: string;
    requestMethod?: string;
}

export async function postFirstFactor(
    username: string,
    password: string,
    rememberMe: boolean,
    targetURL?: string,
    requestMethod?: string,
) {
    const data: PostFirstFactorBody = {
        username,
        password,
        keepMeLoggedIn: rememberMe,
    };

    if (targetURL) {
        data.targetURL = targetURL;
    }

    if (requestMethod) {
        data.requestMethod = requestMethod;
    }

    const res = await PostWithOptionalResponse<SignInResponse>(FirstFactorPath, data);
    return res ? res : ({} as SignInResponse);
}
