import SectionTitle from "./ui/section-title";

const RelevantLinks = () => {
    return (
        <div>
            <SectionTitle text="Miscellaneous" />

            <div className="flex flex-col gap-2">
                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
                >
                    Stanford CS229 (Autumn 2018) ↗
                </a>

                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ"
                >
                    Stanford CS229N ↗
                </a>

                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=j9CInewJrEg&list=PLnuf8iyXggLFiqY86vfKEE8VPWEqeUnVZ"
                >
                    Sheckler Sessions Season 4 ↗
                </a>

                <a
                    target="_blank"
                    href="https://youtu.be/zlLCHjKplGI?si=veR6j2X23vcSAw4w"
                >
                    Miguel Alcubierre - Grandes Maestros (highly recommended) ↗
                </a>

                <a
                    target="_blank"
                    href="https://youtu.be/7WAWY-DktT0?si=oIRP4sZi50mUydRV"
                >
                    Apollo 14: Landing, Moonwalk, Liftoff ↗
                </a>

                <a
                    target="_blank"
                    href="https://youtu.be/22gsyG1yIkE?si=Cyt8ugjhEe9DHdzD"
                >
                    Viva Colombia, Viva Falcao ↗
                </a>

                <a
                    target="_blank"
                    href="https://youtu.be/Z7vO9MvYjkU?si=9UgwpmwNZ6ecR_1w"
                >
                    My opinion on Ruby On Rails ↗
                </a>
            </div>
        </div>
    );
};

export default RelevantLinks;
