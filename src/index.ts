import parser from "./parser"
import Change from "./Change"
import Changelog from "./Changelog"
import Release from "./Release"

export { Change, Changelog, parser, Release }

parser(`# ESound Changelog

(15-03-2023 - 25-03-2023)

## 4.4.1 - 28-03-2023

(Mobile)

### Added

- Swiper in lists for items

### Fixed

- Sorting queue problem`)
