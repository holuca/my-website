import "./Section.css";

type Props = {
    id: string;
    title: string;
    children: React.ReactNode;

};

export function Section({id, title, children} : Props){
    return(
        <section id={id} className="section">
            <div className="section-inner">
                <h2 className="section-title">{title}</h2>
                {children}
            </div>
        </section>


    );

};