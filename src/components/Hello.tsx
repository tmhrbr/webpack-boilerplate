import * as React from "react";

// @ts-ignore // TODO: fix missing .d.ts compile error.
import * as styles from './Hello.module.scss';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <div className={styles.Archie}>
        <h1 className={styles.Hello}>Hello from {props.compiler} and {props.framework}!</h1>
    </div>
);