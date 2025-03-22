import React, { useState } from "react";
import { useLazyGetUserByIdQuery } from "../redux/apiSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const UserById = () => {
  const [userId, setUserId] = useState("");
  const [fetchUser, { data, error, isLoading }] = useLazyGetUserByIdQuery();

  const handleFetchUser = async () => {
    if (userId) {
      await fetchUser(userId);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  p-6">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
        <CardHeader className="text-center text-xl font-semibold">
          Fetch User by ID
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="w-full flex gap-2">
            <Input
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
            <Button onClick={handleFetchUser} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Fetch
            </Button>
          </div>

          {isLoading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">User not found</p>}

          {data?.data && (
            <Card className="w-full p-4 bg-gray-50 border rounded-lg shadow-md">
              <CardContent>
                <p className="text-lg font-medium">
                  Name: <span className="font-semibold">{data.data.name.first} {data.data.name.last}</span>
                </p>
                <p className="text-gray-700">Email: {data.data.email}</p>
                <p className="text-gray-700">Phone: {data.data.phone}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserById;
