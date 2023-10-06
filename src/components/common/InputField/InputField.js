export default function InputField({ className, ...restProps }) {
  return (
    <div className="relative overflow-hidden w-full">
      <input
        {...restProps}
        name={restProps?.name}
        // className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        className={`bg-gray text-gray-900 text-sm font-montseorrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:h-[56px] lg:w-[468px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      />
    </div>
  );
}
