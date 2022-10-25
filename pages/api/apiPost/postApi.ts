import base from './base';

export const getPost = () => {
    const url = `posts`;
    return base.get(url);
}

export const getOnePost = (params?: string) => {
    const url = `posts/${params}`;
    return base.get(url);
}
