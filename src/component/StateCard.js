function StatCard({ title, value }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-2xl font-bold text-pink-600">{value}</h2>
        </div>
    );
}

export default StatCard;
