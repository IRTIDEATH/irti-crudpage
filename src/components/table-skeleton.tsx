import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = async () => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b">
          <td className="py-3 px-6">
            <Skeleton className="w-4 h-4 rounded bg-gray-200" />
          </td>
          <td className="py-3 px-6">
            <Skeleton className="w-full h-4 rounded bg-gray-200" />
          </td>
          <td className="py-3 px-6">
            <Skeleton className="w-full h-4 rounded bg-gray-200" />
          </td>
          <td className="py-3 px-6">
            <Skeleton className="w-full h-4 rounded bg-gray-200" />
          </td>
          <td className="flex justify-center gap-1 py-3">
            <Skeleton className="w-7 h-7 rounded-sm bg-gray-200" />
            <Skeleton className="w-7 h-7 rounded-sm bg-gray-200" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSkeleton