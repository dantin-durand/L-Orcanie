import { Link } from "react-router"; // ✅ import correct pour v7

export function AppNavbar() {
  const list = [
    {
      name: "Carte",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 48c-67.61.29-117.87 9.6-154.24 25.69c-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48ZM48 48c67.61.29 117.87 9.6 154.24 25.69c27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48Z"
          />
        </svg>
      ),
    },
    {
      name: "Menu",
      link: "/menu",
      disabled: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Budget",
      link: "/budget",
      disabled: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4.025 21L.675 9H6.75l5.225-7.775L17.2 9h6.125l-3.35 12zM12 17q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9.175 9H14.8l-2.825-4.2z"
          />
        </svg>
      ),
    },

    {
      name: "Notes",
      link: "/orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.1em"
          height="1.1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.252 3.427a.5.5 0 0 1 .748.435v16.276a.5.5 0 0 1-.748.434l-2.256-1.288a1 1 0 0 0-.992 0l-2.21 1.262a1.6 1.6 0 0 1-1.588 0l-2.21-1.262a1 1 0 0 0-.992 0l-2.256 1.289A.5.5 0 0 1 5 20.138V3.862a.5.5 0 0 1 .748-.435l2.256 1.29a1 1 0 0 0 .992 0l2.21-1.263a1.6 1.6 0 0 1 1.588 0l2.21 1.262a1 1 0 0 0 .992 0zM9.5 9a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  // get current pathname
  const currentPath = window.location.pathname;
  const isActive = (link: string) => currentPath === link;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-[8%] bg-white shadow-md h-18 py-4 border-t border-gray-200">
      {list.map((item) => (
        <Link
          key={item.name}
          to={item.disabled ? "#" : item.link}
          className={
            "flex flex-col items-center text-2xl gap-1" +
            (isActive(item.link) ? " text-orange-500" : " text-primary") +
            (item.disabled ? " opacity-50 cursor-not-allowed" : "")
          }
        >
          {item.icon}
          <span className="text-[11px]">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
