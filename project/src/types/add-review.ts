type onReviewProps = {
  rating: number;
  message: string;
};

export type onReviewFunc = ({ rating, message }: onReviewProps) => void;
