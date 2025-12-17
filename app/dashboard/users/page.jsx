import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getAllUsers, getUserByEmail } from "@/queries/users";
import { verifyUserById, verifyPaymentAndEnroll } from "./actions";

const UsersPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const currentUser = await getUserByEmail(session.user.email);
  if (currentUser?.role !== "instructor") redirect("/login");

  const users = await getAllUsers();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-primary">Users</h1>
      <div className="overflow-x-auto border border-gray-200 rounded-md bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Profile</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Role</th>
              <th className="px-4 py-2 border-b">Email Verified</th>
              <th className="px-4 py-2 border-b">Profile Status</th>
              <th className="px-4 py-2 border-b">Payment Verified</th>
              <th className="px-4 py-2 border-b">Pending Course</th>
              <th className="px-4 py-2 border-b">Aadhar</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const isEmailVerified = !!user.isVerified;
              const hasCustomProfilePicture =
                user.profilePicture &&
                user.profilePicture !==
                  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
              const hasAadhar = !!user.aadhar;
              const isProfileVerified = !!user.isInstructorVerified;
              const isPaymentVerified = !!user.isPaymentVerified;
              const pendingCourseTitle = user.pendingCourseId?.title || null;

              let profileStatus = "Incomplete";
              let profileStatusClass = "text-red-600";

              if (isProfileVerified) {
                profileStatus = "Verified";
                profileStatusClass = "text-green-600";
              } else if (hasCustomProfilePicture && hasAadhar) {
                profileStatus = "Pending";
                profileStatusClass = "text-yellow-600";
              }

              return (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={
                        user.profilePicture ||
                        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                      }
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-10 h-10 rounded-full border object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2 capitalize">{user.role}</td>
                  <td className="px-4 py-2">
                    <span
                      className={
                        isEmailVerified ? "text-green-600" : "text-red-600"
                      }
                    >
                      {isEmailVerified ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={profileStatusClass}>{profileStatus}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={
                        isPaymentVerified ? "text-green-600" : "text-red-600"
                      }
                    >
                      {isPaymentVerified ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {pendingCourseTitle ? (
                      <span>{pendingCourseTitle}</span>
                    ) : (
                      <span className="text-gray-400">None</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {hasAadhar ? (
                      <a
                        href={user.aadhar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View PDF
                      </a>
                    ) : (
                      <span className="text-gray-400">None</span>
                    )}
                  </td>
                  <td className="px-4 py-2 space-y-2">
                    {user.role === "instructor" ? (
                      <span className="block text-xs text-gray-500">
                        Instructors cannot be verified here
                      </span>
                    ) : (
                      <>
                        {isProfileVerified ? (
                          <span className="block text-xs text-green-600 font-semibold">
                            Profile verified
                          </span>
                        ) : (
                          <form action={verifyUserById}>
                            <input type="hidden" name="userId" value={user.id} />
                            <Button
                              type="submit"
                              className="h-8 px-3 text-xs w-full"
                              variant="outline"
                            >
                              Verify profile
                            </Button>
                          </form>
                        )}
                        {pendingCourseTitle && !isPaymentVerified && (
                          <form action={verifyPaymentAndEnroll}>
                            <input type="hidden" name="userId" value={user.id} />
                            <input
                              type="hidden"
                              name="courseId"
                              value={user.pendingCourseId._id?.toString() || user.pendingCourseId.id}
                            />
                            <Button
                              type="submit"
                              className="h-8 px-3 text-xs w-full"
                              variant="outline"
                            >
                              Verify payment &amp; enroll
                            </Button>
                          </form>
                        )}
                        {isPaymentVerified && (
                          <span className="block text-xs text-green-600 font-semibold">
                            Payment verified
                          </span>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;

