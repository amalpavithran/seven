export type UserDoc = {
    uid: string,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
};

export type Announcement = {
    uid: string,
    createdBy: string,
    title: string,
    description: string
}
