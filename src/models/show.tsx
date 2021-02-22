export class Review {
    description: string = '';
    rating!: number;
    memberId!: number;
}

export class Show {
    name: string = '';
    reviews: Review[] = [];
}