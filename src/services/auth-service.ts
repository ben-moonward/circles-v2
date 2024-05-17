import fetcher from "@/utils/fetcher";

namespace AuthService {
    export const login = fetcher
        .path("/api/v1/auth/admin/login")
        .method("post")
        .create();
}

export default AuthService;
