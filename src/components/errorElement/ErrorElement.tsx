import { useNavigate, useRouteError } from "react-router-dom";

interface ErrorElementProps {
  onRetry?: () => void;
}

const ErrorElement = ({ onRetry }: ErrorElementProps) => {
  const error = useRouteError() as { message: string } | undefined;
  const navigate = useNavigate();

  const trackError = (error: any) => {
    console.error(error);
  };
  trackError(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">Please try again</p>
        <button
          onClick={onRetry ? onRetry : () => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
