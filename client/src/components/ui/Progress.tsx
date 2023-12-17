
const Progress = () => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                <div className="bg-white p-4 rounded shadow-md">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
                    <p className="text-center text-indigo-500 mt-2">Creating Store...</p>
                </div>
            </div>
        </>
    )
}

export default Progress