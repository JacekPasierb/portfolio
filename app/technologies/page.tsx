
import { title } from "process";
import css from "../styles/Technologies.module.css";

import { iconsData } from "../lib/data";
import { poppins } from "../ui/fonts";
import IconCard from "../components/IconCard/IconCard";

export default function Page() {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.titlePage}>Technologie</h1>
        <div className={css.sections}>
          {iconsData.map((icon) => (
            <section key={icon.section} className={css.section}>
              <h2 className={`${poppins.className} ${css.sectionTitle}`}>{icon.section}</h2>
              <div className={css.cardsIcon}>
                {icon.icons.map(({ path, title,color }) => (
                  <IconCard key={title} path={path} title={title} color={color}/>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}


