export default function ProfileBox() {
  return (
    <>
      <img
        className="w-20 h-20 rounded-full ring-2 ring-teal-500/30 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-md object-cover"
        src="/common/profile.jpeg"
        alt="profile"
      />
      <div>
        <h3 className="font-bold text-2xl text-slate-900 dark:text-white">
          김종민
        </h3>
        <span className="inline-block mt-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded-full">
          Frontend Developer
        </span>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.
      </p>
    </>
  );
}
