type EmptyStateProps = {
  message?: string;
};

function EmptyState({
  message = "No data available",
}: EmptyStateProps) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;