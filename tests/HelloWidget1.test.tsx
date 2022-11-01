import React from "react";
import { Root, createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

import HelloWidget from "../build/HelloWidget";
/*/
describe('test the HelloWidget component', ()=>{

    let container:HTMLElement|null = null;
    let root:Root|null = null;
    
    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });
    afterEach(()=>{
        act(()=>{
            root?.unmount();
            container?.remove();
            container = null;
        });
    });
    it("renders without a name", ()=>{
        act(()=>{
            root?.render(<HelloWidget />);
        });
        expect(container?.querySelector('h1')?.textContent).toBe("Hello, world!");
    });
    it("renders with a name", ()=>{
        act(()=>{
            root?.render(<HelloWidget name='Nick'/>);
        });
        expect(container?.querySelector('h1')?.textContent).toBe("Hello, Nick!");
    });
    it("shows correct click count", ()=>{
        
        act(()=>{
            root?.render(<HelloWidget />);
        });

        const counter = container?.querySelector('.clickCount') as HTMLElement | null;
        const bttn_add = container?.querySelector('button.add') as HTMLElement | null;
        const bttn_sub = container?.querySelector('button.sub') as HTMLElement | null;

        expect(counter?.textContent).toBe("0");
        act(()=>{ bttn_add?.click(); });
        expect(counter?.textContent).toBe("1");
        act(()=>{ bttn_sub?.click(); });
        expect(counter?.textContent).toBe("0");
        act(()=>{ bttn_sub?.click(); });
        expect(counter?.textContent).toBe("0");
    });
});
/**/