/**
 * interface for services interacting with a datasource.  Because
 * of the nature of routing, orchestrated via header.component, this
 * definition serves to simplify the interactions with Manage dropdown
 * functionality.  Each implementation, injectable service, should
 * encapsulate and manage its own data lifecycle.
 */
export interface IHttpService {
  save();
  fetch();
}
