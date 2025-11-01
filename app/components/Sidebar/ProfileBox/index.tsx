export default function ProfileBox() {
  return (
    <>
      <img
        className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md"
        src="/common/profile.jpeg"
        alt="profile"
      />
      <h3 className="font-bold text-xl text-slate-900 dark:text-white mt-2">
        김종민
      </h3>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        프론트엔드 개발자입니다.
        <br />
        개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다
      </p>
    </>
  );
}
