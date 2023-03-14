
import { parseNumber } from '../../bot';
import * as fixed from './fixed';
import * as lake from './lake';
import * as travelers from './travelers';
import * as villagers from './villagers';

const people: Groups = {
    fixed: fixed as any,
    lake: lake as any,
    travelers: travelers as any,
    villagers: villagers as any
}

interface Groups {
    [group: string]: { [name: string]: string; };
}

export interface Person {
    name: string;
    description: string;
}

export function findPerson(key: string, probability: number): Person|undefined {
    let person: Person;
    if (Math.random() <= probability) {
        const parts = key.split(':');
        const group = people[parts[0]];
        if (parts.length != 2 || typeof group != 'object') {
            throw new Error(`findPerson: invalid key of '${key}' passed in.`);
        }

        if (parseNumber(parts[1], -1) >= 0) {
            // Pick a random person from the group
            const keys = Object.keys(group);
            const i = Math.floor(Math.random() * (keys.length - 1));
            const name = keys[i];
            person = {
                name: name,
                description: group[name]
            };
        } else if (group.hasOwnProperty(parts[1])) {
            // Return the person by name
            person = {
                name: parts[1],
                description: group[parts[1]]
            };
        } else {
            throw new Error(`findPerson: couldn't find '${key}'.`);
        }
    }

    return person;
}
