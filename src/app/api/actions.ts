"use server";
import "server-only";
import fetcher from "@/services/fetcher";
import { paths } from "backend-sdk/schema";
import {
    HttpMethod,
    MediaType,
    PathsWithMethod,
} from "openapi-typescript-helpers";

type ApiRequest = () => void;

type ResponseContent<T> = {
    "application/json": T;
};

type Responses = {
    [code: number]: ResponseContent<unknown>;
};

type Parameters<
    P extends keyof TypedPaths,
    M extends keyof TypedPaths[P],
> = TypedPaths[P][M] & {
    query?: unknown;
    path?: unknown;
};

type Operation<P extends keyof TypedPaths, M extends keyof TypedPaths[P]> = {
    requestBody: ResponseContent<unknown> | unknown;
    responses: Responses | unknown;
    parameters: Parameters<P, M> | unknown;
};

type Path<
    P extends keyof TypedPaths,
    M extends keyof TypedPaths[P] = keyof TypedPaths[P],
> = {
    [key in M]: Operation<P, M>;
};

type TypedPaths = paths & {
    [path in keyof paths & string]: Path<path>;
};

function fn<
    P extends keyof TypedPaths & string,
    M extends keyof Path<P> & string,
    O extends Path<P>[M] & Operation<P, M>,
>(path: P, method: M, params: O["parameters"]) {
    const p = params;
    return fetch(path, { method });
}

const r = fn("/api/v1/admin/agencies", "get", {});
