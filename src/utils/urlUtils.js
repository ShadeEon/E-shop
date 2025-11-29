export const createSlug = (title) => {
    return title
        .toLowerCase()
        // Replace spaces, non-alphanumeric chars (except dashes), with a single dash
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};