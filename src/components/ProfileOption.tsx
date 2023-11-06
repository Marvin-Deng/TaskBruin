import { ReactNode } from "react";
import { Menu } from "@headlessui/react";

function classNames<T extends string>(...classes: T[]) {
  return classes.filter(Boolean).join(" ");
}

interface ProfileOptionsProps {
  title: ReactNode;
}

const ProfileOption: React.FC<ProfileOptionsProps> = (props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm text-gray-700"
          )}
        >
          {props.title}
        </a>
      )}
    </Menu.Item>
  );
};

export default ProfileOption;
