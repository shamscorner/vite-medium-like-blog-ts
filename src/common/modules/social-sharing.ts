import VueSocialSharing from 'vue-social-sharing'
import { UserModule } from '~/types'

// Setup Vue Social Sharing
// https://www.npmjs.com/package/vue-social-sharing
export const install: UserModule = ({ app }) => {
  app.use(VueSocialSharing)
}
