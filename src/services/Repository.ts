import request from "request-promise";

const GITHUB_URL = "https://api.github.com/users/";
const REPO_ENDPOINT = "/repos";

export async function getRepositories(username: string) {
    const option = {
        headers: {
            "User-Agent": "NourChaabene"
        },
        uri: GITHUB_URL + username + REPO_ENDPOINT,
    };
    return request.get(option);
};