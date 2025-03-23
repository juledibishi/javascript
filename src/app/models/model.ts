export interface Person {
    id?: number;
    name: string;
    surname?: string;
    age?: number;
    genderId?: number;
    genderName?: string;
    eyesName?: string;
    eyesId?: number;
    height?: number;
    mass?: number;
    eye_color?: string;
    gender?: string

}
export interface Gender {

    id: number;
    name: string;

}

export interface FindPerson {
    id: number
    name: string;
    occupation: string;
}

// export interface Eyes {
//     id: number;
//     name: string;
// }
export interface Article {
    id: number;
    name: string;
    price: number;
    quantity: number;
    sum?: number;
}



