

const SkeletonLoader = () => {
    return (
        <div className="w-full max-w-sm bg-gray-200 m-5 border border-gray-200 rounded-lg shadow">
            <div className="p-8 rounded-t-lg animate-pulse"></div>
            <div className="px-5 pb-5">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-5 animate-pulse"></div>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mr-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mr-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mr-2 animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
export default SkeletonLoader