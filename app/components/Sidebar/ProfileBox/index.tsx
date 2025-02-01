export default function ProfileBox() {
  return (
    <>
      <img
        className="w-16 h-16 rounded-full"
        src="/common/profile.jpeg"
        alt="profile"
      />
      <h3 className="font-semibold text-base text-gray-900 dark:text-white">
        김종민
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        프론트엔드 개발자입니다.
        <br />
        개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다
      </p>
    </>
  );
}
