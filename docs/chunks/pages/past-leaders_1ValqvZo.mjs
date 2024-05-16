import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';

const $$Astro = createAstro("https://pvjacl.github.io");
const $$PastLeaders = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PastLeaders;
  const presidents = [
    {
      name: "James Manabu Yamamoto",
      reign: "1931-1932"
    },
    {
      name: "Daichi Yoshioka",
      reign: "1933-1934"
    },
    {
      name: "Torun Kuramoto",
      reign: "1934-1935"
    },
    {
      name: "Dan Sakahara/Howard Sakura",
      reign: "1937-1938"
    },
    {
      name: "Mas Nakamichi",
      reign: "1939-1940"
    },
    {
      name: "(inactive until Feb. 19, 1948)",
      reign: "1941-1948"
    },
    {
      name: "Kaz Yamane",
      reign: "1948-1949"
    },
    {
      name: "Art Yamada",
      reign: "1950"
    },
    {
      name: "Tom Takemura",
      reign: "1951"
    },
    {
      name: "Hiroshi Sakahara",
      reign: "1952"
    },
    {
      name: "John Sasaki",
      reign: "1953"
    },
    {
      name: "Robert Mizukami",
      reign: "1954"
    },
    {
      name: "Dr. Kay Toda",
      reign: "1955"
    },
    {
      name: "Yosh Kawabata",
      reign: "1956"
    },
    {
      name: "Tom Takemura",
      reign: "1957 "
    },
    {
      name: "Dr. John Kanda",
      reign: "1958"
    },
    {
      name: "Robert Mizukami",
      reign: "1959"
    },
    {
      name: "Dr. Sam Uchiyama",
      reign: "1960"
    },
    {
      name: "Toshio Tsuboi",
      reign: "1961"
    },
    {
      name: "Kaz Yamane",
      reign: "1962"
    },
    {
      name: "George Iwakiri",
      reign: "1963"
    },
    {
      name: "Joseph H. Kosai",
      reign: "1964"
    },
    {
      name: "Frank Komoto",
      reign: "1965"
    },
    {
      name: "George Murakami",
      reign: "1966"
    },
    {
      name: "Frank Mizukami",
      reign: "1967"
    },
    {
      name: "Yoshio Kosai",
      reign: "1968-1969"
    },
    {
      name: "Yoshihiko Tanabe",
      reign: "1970-1971"
    },
    {
      name: "Emi Somekawa",
      reign: "1972-1973"
    },
    {
      name: "Dr. Paul Ellis",
      reign: "1974-1975"
    },
    {
      name: "Greg Mizukami",
      reign: "1976"
    },
    {
      name: "Tom Shigio",
      reign: "1977-1978"
    },
    {
      name: "Ted Masumoto",
      reign: "1978-1979"
    },
    {
      name: "Joseph H. Kosai",
      reign: "1980-1981"
    },
    {
      name: "Dr. John Kanda",
      reign: "1982-1983"
    },
    {
      name: "Emi Somekawa",
      reign: "1984-1985"
    },
    {
      name: "Rev. Rom Fukuyama",
      reign: "1986-1987"
    },
    {
      name: "Janice Yoshiwara",
      reign: "1988-1989"
    },
    {
      name: "Del H. Tanabe",
      reign: "1990-1991"
    },
    {
      name: "Jeffrey Hiroo",
      reign: "1992-1993"
    },
    {
      name: "Garry Fujita",
      reign: "1994-1997"
    },
    {
      name: "Elsie Y. Taniguchi",
      reign: "1998-2001"
    },
    {
      name: "Steven Kono",
      reign: "2002-2003"
    },
    {
      name: "Elsie Y. Taniguchi",
      reign: "2004-2017"
    },
    {
      name: "Eileen Yamada Lamphere",
      reign: "2017-Present"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Past and Current Presidents", "description": "Past and current presidents for the Puyallup Valley Chapter of the Japanese American Citizens League", "keywords": "Puyallup Valley JACL Presidents History", "pubDate": /* @__PURE__ */ new Date("August 08 2021") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<table> ${presidents.map((president) => {
    return renderTemplate`<tr> <td><strong>${president.reign}</strong></td> <td>${president.name}</td> </tr>`;
  })} </table> ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/past-leaders.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/past-leaders.astro";
const $$url = "/past-leaders";

export { $$PastLeaders as default, $$file as file, $$url as url };
