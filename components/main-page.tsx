'use client'

import React, {useState} from "react";
import {Mda} from "@/components/mda";
import {Text} from "@/components/text";
import {Cntrl} from "@/components/cntrl";
import {Hdr} from "@/components/hdr";
import {Fltr} from "@/components/fltr";
import {Lib} from "@/components/lib";
import {MenuContainer} from "@/components/layout/menu-container";

export const MainPage = () => {
    const [stage, setStage] = useState<'a' | 'b'>('a')
    const [blocks, setBlocks] = useState<'text' | 'mda'>('text')
    return (
        <div className={'flex flex-col py-5 h-full'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 h-full mb-2.5 w-full'}>
                {/*stage a*/}
                <div className={`${stage === 'a' ? 'grid' : 'hidden'} md:grid md:grid-rows-[1fr_auto] gap-5 lg:px-5 relative`}>
                    <button onClick={() => setBlocks(blocks === 'text' ? 'mda' : 'text')} className={'absolute top-0 left-0 m-1 md:mx-6 opacity-50 text-xs cursor-pointer px-2 py-1 bg-foreground/30 rounded-md'}>
                        {blocks === 'mda' ? (
                            <span>Go to text</span>
                        ) : (
                            <span>Go to mda</span>
                        )}
                    </button>
                    {blocks === 'mda' ? (
                        <>
                            <Mda/>
                            <div className={'grid grid-rows-[1fr_20px] md:grid-rows-[180px_20px] pb-[5px] gap-2.5'}>
                                <Text/>
                                <Cntrl/>
                            </div>
                        </>
                    ) : (
                        <div className={'grid grid-rows-[1fr_20px] pb-[5px] gap-2.5'}>
                            <Text/>
                            <Cntrl/>
                        </div>
                    )}
                </div>

                {/*stage b*/}
                <div className={`${stage === 'b' ? 'grid' : 'hidden'} md:grid grid-rows-[auto_30px_1fr] gap-2.5 lg:px-5`}>
                    <div className={'grid grid-rows-[50px_70px] gap-[5px]'}>
                        <Hdr/>
                        <Hdr/>
                    </div>
                    <Fltr/>
                    <Lib/>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 grid-rows-[50px_50px] md:grid-rows-[50px] md:mb-5.5'}>
                <MenuContainer menu={'a'} setStage={setStage} stage={stage}/>
                <MenuContainer menu={'b'} setStage={setStage} stage={stage}/>
            </div>
            <div
                className={'h-[50px] self-center hidden md:flex col-span-2 w-[130px] rounded-md border border-foreground/15 justify-self-center tracking-tight items-center justify-center text-foreground/50'}>
                <span>container_130x50</span>
            </div>
        </div>
    )
}