import {UsernameInput} from './ui/LoginInput/UsernameInput'
import {PasswordInput} from './ui/PasswordInput/PasswordInput'
import {SftLogo} from './ui/SftLogo/SftLogo'
import {NavItem} from './ui/NavItem/NavItem'
import {BurgerMenuIcon} from './ui/BurgerMenuIcon/BurgerMenuIcon'
import {SelectChoose} from './ui/SelectChoose/SelectChoose'
import {ButtonGreenBlack} from './ui/ButtonGreenBlack/ButtonGreenBlack'
import {SKUInput} from './ui/SKUInput/SKUInput'
import {SKUPageTitle} from './ui/SKUPageTitle/SKUPageTitle'
import {SKUListItem} from './ui/SKUListItem/SKUListItem'
import {WorkplaceTitle} from './ui/WorkplaceTitle/WorkplaceTitle'
import {WorkplaceTab} from './ui/WorkplaceTab/WorkplaceTab'
import {AddMember} from './ui/AddMember/AddMember'
import {ProjectMember} from './ui/ProjectMember/ProjectMember'
import {FileCard} from './ui/FileCard/FileCard'
import {StageCard} from './ui/StageCard/StageCard'
import {ProjectResponsible} from './ui/ProjectResponsible/ProjectResponsible'
import {ProjectTextarea} from './ui/ProjectTextarea/ProjectTextarea'
import {AgreementTextarea} from './ui/AgreementTextarea/AgreementTextarea'
import {AgreementTextareaColor} from './ui/AgreemntTextareaColor/AgreementTextareaColor'
import {ButtonWithIcon} from './ui/ButtonWithIcon/ButtonWithIcon'
import {StatusUpdate} from './ui/StatusUpdate/StatusUpdate'
import {JoinMember} from './ui/JoinMember/JoinMember'
import {StatusInfo} from './ui/StatusInfo/StatusInfo'
import {ProjectUnit} from './ui/ProjectUnit/ProjectUnit'
import {TextareaNoBorder} from './ui/TextareaNoBorder/TextareaNoBorder'
import {InputSearchSmall} from './ui/InputSearchSmall/InputSearchSmall'
import {ChangeItem} from './ui/ChangeItem/ChangeItem'
import {ButtonNoBorder} from './ui/ButtonNoBorder/ButtonNoBorder'
import {Icon} from './ui/Icon/Icon'
import {InputNoBorder} from './ui/InputNoBorder/InputNoBorder'
import {PickColor} from './ui/PickColor/PickColor'
import PersonImage from './lib/assets/person-image.svg'
import SFTLogoBlack from './lib/assets/sft-packaging-logo-black.svg'
import DeleteIcon from './lib/assets/delete-icon.png'
import CancelIcon from './lib/assets/cancel-icon.svg'
import LaysSchema from './lib/assets/lays-schema.jpg'
import BoxSchema from './lib/assets/box-schema.jpg'
import ChartsImage from './lib/assets/charts-image.jpg'

import $api from './lib/http/index'
import { Context } from './lib/context/context'
import { workplaceStore } from './lib/context/context'
import { workplaceNavigationStore } from './lib/context/context'
import { authStore } from './lib/context/context'
import { employeeStore } from './lib/context/context'

export {
  UsernameInput, PasswordInput, SftLogo, NavItem, BurgerMenuIcon, SelectChoose,
  ButtonGreenBlack, SKUInput, SKUPageTitle, SKUListItem, WorkplaceTitle, WorkplaceTab,
  AddMember, ProjectMember, FileCard, StageCard, ProjectResponsible, ProjectTextarea,
  AgreementTextarea, AgreementTextareaColor, ButtonWithIcon, StatusUpdate, JoinMember,
  StatusInfo, ProjectUnit, TextareaNoBorder, InputSearchSmall, ChangeItem,
  ButtonNoBorder, Icon, InputNoBorder, PickColor, PersonImage, SFTLogoBlack,
  DeleteIcon, CancelIcon, LaysSchema, BoxSchema, ChartsImage
}

export {
  Context, $api, authStore, workplaceStore, workplaceNavigationStore, employeeStore
}