import React from "react";
import { useGetRandomUserQuery } from "../redux/apiSlice";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";

const RandomUser = () => {
  const { data, error, refetch, isLoading } = useGetRandomUserQuery();

  return (
    <div className="flex flex-col items-center justify-center  p-6">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-lg bg-white">
        <CardHeader className="text-center text-xl font-semibold">
          Get a Random User
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button
            onClick={refetch}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <ReloadIcon className="animate-spin" />
            ) : (
              "Fetch New User"
            )}
          </Button>

          {isLoading && <p className="text-gray-500">Fetching user...</p>}
          {error && <p className="text-red-500">Error fetching user</p>}

          {data?.data && (
            <Card className="w-full p-4 bg-gray-50 border rounded-lg shadow-md">
              <CardContent className="text-center">
                <p className="text-lg font-medium">
                  Name:
                  <p className="font-normal">
                    {data.data.name.first} {data.data.name.last}
                  </p>
                </p>
                <div>
                  <p className="font-bold">Email:</p>
                  <span>{data.data.email}</span>
                </div>
             
                <div>
                  <p className="font-bold">Phone:</p>
                  <span>{data.data.phone}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RandomUser;
