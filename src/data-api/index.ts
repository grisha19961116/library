import { baseUrl } from "../helpers/index"

export type Book = {
    id: number,
    title: string,
    author: string,
    category: string,
    ISBN: number,
    createdAt: string,
    editedAt: string,
    status: "active" | "deactivated",
}

const getBooks = async (): Promise<Book[]> =>
    fetch(baseUrl).then((response) => response.json())

export type FieldsBook = {
    title?: string,
    author?: string,
    category?: string,
    ISBN?: number,
    status?: string
}

const postBook = async (fields: FieldsBook): Promise<Book> =>
    fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({
            ...fields,
            "createdAt": Date.now(),
            "editedAt": "--",
            "status": "active"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())

const patchBook = async (fields: FieldsBook, id: string): Promise<Book> =>
    fetch(baseUrl + id, {
        method: "PATCH",
        body: JSON.stringify({
            ...fields,
            "editedAt": Date.now(),
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())

const deleteBook = async (id: string): Promise<Book> =>
    fetch(baseUrl + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())

export {
    getBooks,
    postBook,
    patchBook,
    deleteBook
}