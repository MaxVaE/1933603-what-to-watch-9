export type onReviewProps = {
  rating: number;
  comment: string;
};

export type onReviewFunc = ({ rating, comment }: onReviewProps) => void;
