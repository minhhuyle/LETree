import {select, Store} from "@ngrx/store";
import {StateMap} from "./StateReduceMap";
import {Observable} from "rxjs";

export function selectStore<K = (source$: Observable<K>) => K>(store: Store<StateMap>, mapFn: (state: StateMap) => K): Observable<K> {
  return store.pipe(select(mapFn));
}
