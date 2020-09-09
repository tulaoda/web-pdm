import { Graph } from '@antv/g6';
declare const TGraph_base: import("mobx-keystone")._Model<unknown, {
    zoom: import("mobx-keystone").OptionalModelProp<number, number>;
}>;
export declare class TGraph extends TGraph_base {
    G6Graph: Graph;
    setG6Graph(graph: Graph): void;
    setZoom(zoom: number): void;
    minZoom(graph: Graph): void;
    maxZoom(graph: Graph): void;
    container(graph: Graph): void;
    downAsImage(): void;
    actionEdges(currentModel: string): void;
}
export {};
