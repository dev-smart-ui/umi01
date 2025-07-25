import {Dispatch, SetStateAction} from "react";

interface IMenuContainer{
    menu: 'a' | 'b'
    stage: 'a' | 'b'
    setStage: Dispatch<SetStateAction<"a" | "b">>
}
export const MenuContainer = ({menu, setStage, stage}: IMenuContainer) => {
    return(
        <div className={'rounded-md border border-white/15 flex items-center justify-center gap-5'}>
            <span>menu_container_{menu}</span>
            {stage !== menu &&(
                <button onClick={() => setStage(menu)} className={'md:hidden opacity-70 cursor-pointer'}>Apply</button>
            )}
        </div>
    )
}