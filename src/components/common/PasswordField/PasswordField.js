import { IconContext } from "react-icons";
import { BsEyeFill as Eye, BsEyeSlashFill as SlashEye } from "react-icons/bs";

export default function PasswordField({ className, ...restProps }) {
  const _passwordtype =
    restProps?.passwordtype === "true" ? "password" : "text";
  return (
    <div className="relative lg:h-[53px] lg:w-[344px]">
      <input
        {...restProps}
        name={restProps?.name}
        type={_passwordtype}
        className={`bg-pastalblue focus:border focus:border-royalblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  block w-full lg:h-[53px] lg:w-[344px] p-2.5 rounded-lg ${className}`}
        // className={`border-2 py-2 pl-4 pr-14 rounded-lg w-full outline-none ${className}`}
      />
      <IconContext.Provider
        value={{
          className: `text-lg absolute right-6 top-[17px] cursor-pointer`,
        }}
      >
        {restProps.passwordtype === "true" ? (
          <SlashEye
            onClick={() =>
              restProps?.setpasswordtype(
                restProps?.passwordtype === "true" ? "false" : "true"
              )
            }
          />
        ) : (
          <Eye
            onClick={() =>
              restProps?.setpasswordtype(
                restProps?.passwordtype === "false" ? "true" : "false"
              )
            }
          />
        )}
      </IconContext.Provider>
    </div>
  );
}
